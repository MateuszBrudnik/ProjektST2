using System;
using Microsoft.AspNetCore.Mvc;
using ProjektST2.DTO;
using ProjektST2.Entities;
using ProjektST2.Services;

namespace ProjektST2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class Gate1Controller : ControllerBase
    {
        private ParkingDBContext _context;

        public Gate1Controller(ParkingDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public Ticket GetTicket(string registration)
        {
            var g = new Gate1Service(_context);
            return g.GetTicket(registration);

        }
    }
}

