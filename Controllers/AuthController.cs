using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Models.Authentication;

namespace Zeta.Controllers
{
    [Produces("application/json")]
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly string _configKey;

        public AuthController(IConfiguration configuration)
        {
            _configKey = configuration["SecurityKey"];
        }

        [HttpPost,Route("login")]
        public IActionResult Login([FromBody]Login user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if(user.UserName == "admin" && user.Password == "123")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configKey));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokeOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            } else
            {
                return Unauthorized();
            }
        }
    }
}