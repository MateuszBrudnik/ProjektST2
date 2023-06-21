using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public class PremiumGateService: IPremiumGateService
	{
        private readonly ParkingDBContext _context;
        public PremiumGateService(ParkingDBContext context)
        {
            _context = context;
        }

        public string Premium(string registration)
        {
            try
            {
                var ticket = _context.Ticket.FirstOrDefault(x => x.Registration == registration);
                ticket.IsPremium = true;
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
                return "Rampa otwiera się";
            }
            catch (Exception)
            {
                return "Wewnętrzny błąd, sprawdź czy rejestracja jest czytelna";
            }
        }
    }
}

