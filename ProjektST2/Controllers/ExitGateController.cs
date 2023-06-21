using System;
using Microsoft.AspNetCore.Mvc;
using ProjektST2.DTO;
using ProjektST2.Entities;
using ProjektST2.Services;

namespace ProjektST2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class ExitGateController : ControllerBase
    {
        private ParkingDBContext _context;

        public ExitGateController(ParkingDBContext context)
        {
            _context = context;
        }

        [HttpDelete]
        public string Exit(string registration)
        {
            ExitGateService e = new ExitGateService(_context);
            return e.LetOut(registration);
        }
    }
}

