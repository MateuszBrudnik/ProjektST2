using System;
using Microsoft.AspNetCore.Mvc;
using ProjektST2.DTO;
using ProjektST2.Entities;
using ProjektST2.Services;

namespace ProjektST2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class PremiumGateController : ControllerBase
    {
        private ParkingDBContext _context;

        public PremiumGateController(ParkingDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public string Premium(string registration)
        {
            PremiumGateService p = new PremiumGateService(_context);
            return p.Premium(registration);
        }
    }
}

