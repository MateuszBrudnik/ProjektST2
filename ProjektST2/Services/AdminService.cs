using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public class AdminService: IAdminService
	{
        private readonly ParkingDBContext _context;
        public AdminService(ParkingDBContext context)
        {
            _context = context;
        }

        public List<TicketDTO> GetTickets()
        {
            var tickets = _context.Ticket.ToList();
            var ticketDTOs = new List<TicketDTO>();
            foreach (var ticket in tickets)
            {
                var calculatedTime = ticket.CalculateTime(ticket.EntryTime);
                ticketDTOs.Add(new TicketDTO
                {
                    Registration = ticket.Registration,
                    EntryTime = ticket.EntryTime,
                    IsPremium = ticket.IsPremium,
                    Payed = ticket.Payed,
                    ToPay = ticket.CalculateFee(ticket.IsPremium, calculatedTime, ticket.Payed),
                    ParkingTime = calculatedTime,
                    DepartureTime = ticket.DepartureTime
                });
            }
            return ticketDTOs;
        }

        public Ticket GetTicket(string registration)
        {
            try
            {
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                return ticket;
            }
            catch
            {
                return null;
            }
        }

        public string LetOut(string registration)
        {
            try
            {
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                ticket.DepartureTime = DateTime.Now;
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
                return "klient ma 15 min na wyjazd";
            }
            catch (Exception)
            {
                return "Wewnętrzny błąd, sprawdź czy rejestracja jest czytelna";
            }
        }

        public void Update(Ticket ticket)
        {
            try
            {
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
            }
            catch (Exception)
            {

            }
        }
    }
}

