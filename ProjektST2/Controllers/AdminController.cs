using System;
using Microsoft.AspNetCore.Mvc;
using ProjektST2.DTO;
using ProjektST2.Entities;
using ProjektST2.Services;

namespace ProjektST2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class AdminController : ControllerBase
    {
        private ParkingDBContext _context;

        public AdminController(ParkingDBContext context)
        {
            _context = context;
        }

        [HttpPut]
        public void Update([FromBody] Ticket ticket)
        {
            var a = new AdminService(_context);
            a.Update(ticket);
        }

        [HttpDelete]
        public string LetOut(string registration)
        {
            var a = new AdminService(_context);
            return a.LetOut(registration);
        }

        [HttpGet]
        public List<TicketDTO> Tickets()
        {
            var a = new AdminService(_context);
            return a.GetTickets();
        }

        [HttpGet]
        public Ticket Ticket(string registration)
        {
            var a = new AdminService(_context);
            return a.GetTicket(registration);
        }
    }
}

