using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Zeta.Controllers
{
    [Produces("application/json")]
    [Route("api/check")]
    public class CheckController : Controller
    {
        [HttpGet, Authorize]
        public IActionResult Get()
        {
            return Ok(new { response = "authorized" });
        }
    }
}