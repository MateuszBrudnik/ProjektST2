using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public class PaymentService: IPaymentService
	{
        private readonly ParkingDBContext _context;
        public PaymentService(ParkingDBContext context)
        {
            _context = context;
        }

        public TicketDTO Calculate(string registration)
        {
            try
            {
                var ticketDto = new TicketDTO();
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                var calculatedTime = ticket.CalculateTime(ticket.EntryTime);
                ticketDto.Registration = ticket.Registration;
                ticketDto.EntryTime = ticket.EntryTime;
                ticketDto.IsPremium = ticket.IsPremium;
                ticketDto.Payed = ticket.Payed;
                ticketDto.ParkingTime = calculatedTime;
                ticketDto.ToPay = ticket.CalculateFee(ticket.IsPremium, calculatedTime, ticket.Payed);
                ticketDto.DepartureTime = ticket.DepartureTime;
                return ticketDto;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public string Pay(string registration, float amount)
        {
            try
            {
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                ticket.Payed = ticket.Payed + amount;
                var calculatedTime = ticket.CalculateTime(ticket.EntryTime);
                var toPay = ticket.CalculateFee(ticket.IsPremium, calculatedTime, ticket.Payed);
                if (toPay <= 0)
                {
                    ticket.DepartureTime = DateTime.Now;
                    _context.Ticket.Update(ticket);
                    _context.SaveChanges();
                    return "Masz 15 minut na wyjazd ( do: " + DateTime.Now.AddMinutes(15).ToShortTimeString + " )";
                }
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
                return "Ponów płatność. Płatność zakończona niepowodzeniem, lub wpłacona kwota jest zbyt niska";
            }
            catch (Exception)
            {
                return "Wewnętrzny błąd, sprawdź czy rejestracja jest czytelna";
            }
        }
    }
}

