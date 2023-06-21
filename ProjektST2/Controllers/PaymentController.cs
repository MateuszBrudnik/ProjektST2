using System;
using Microsoft.AspNetCore.Mvc;
using ProjektST2.DTO;
using ProjektST2.Entities;
using ProjektST2.Services;

namespace ProjektST2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class PaymentController : ControllerBase
    {
        private ParkingDBContext _context;

        public PaymentController(ParkingDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public TicketDTO Calculate(string registration)
        {
            PaymentService p = new PaymentService(_context);
            return p.Calculate(registration);
        }

        [HttpPut]
        public string Oplacono(string registration, float amount)
        {
            PaymentService p = new PaymentService(_context);
            return p.Pay(registration, amount);
        }
    }
}

