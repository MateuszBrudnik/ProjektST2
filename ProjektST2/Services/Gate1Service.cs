using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public class Gate1Service: IGate1Service
	{
        private readonly ParkingDBContext _context;
        public Gate1Service(ParkingDBContext context)
        {
            _context = context;
        }

        public Ticket GetTicket(string registration)
        {
            var ticket = new Ticket();
            ticket.Registration = registration;
            ticket.DepartureTime = DateTime.Now;
            ticket.EntryTime = DateTime.Now;
            ticket.IsPremium = false;
            ticket.Payed = 0;
            _context.Ticket.Add(ticket);
            _context.SaveChanges();

            return ticket;
        }
    }
}

