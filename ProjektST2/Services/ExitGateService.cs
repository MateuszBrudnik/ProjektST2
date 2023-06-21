using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public class ExitGateService: IExitGateService
	{
        private readonly ParkingDBContext _context;
        public ExitGateService(ParkingDBContext context)
        {
            _context = context;
        }

        public string LetOut(string registration)
        {
            try
            {
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                if (CheckForExit(ticket.DepartureTime))
                {
                    _context.Ticket.Remove(ticket);
                    _context.SaveChanges();
                    return "Rampa otwiera się, dziękujemy za skorzystanie z parkingu";
                }
                return "Bilet nie został opłacony";

            }
            catch (Exception)
            {
                return "Wewnętrzny błąd, sprawdź czy rejestracja jest czytelna";
            }
        }

        public bool CheckForExit(DateTime departureTime)
        {
            var diff = DateTime.Now - departureTime;
            if (diff.Minutes < 16 && diff.Hours == 0 && diff.Days == 0)
            {
                return true;
            }
            return false;
        }
    }
}

