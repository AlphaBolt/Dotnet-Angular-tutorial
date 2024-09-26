using System;
using CoreWebApi.Functionality;
using CoreWebApi.Models;
using CoreWebApi.Service;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        IUserOperation userOperation;

        public UserApiController()
        {
            userOperation = new UserService();
        }

        [HttpPost("signup")]
        public IActionResult createAccount(User user)
        {
            int add = userOperation.createUser(user);
            // if(add > 0)
            // {
            //     return Ok("User created successfully!");
            // }
            return Ok(add);
        }

        [HttpPost("signin")]
        public IActionResult AccountValidate(UserDTO userDTO)
        {
            int valid = userOperation.validateUser(userDTO.Username, userDTO.Password);
            // if(valid > 0)
            // {
            //     return Ok("Signed in successfully!");
            // }
            return Ok(valid);

        }

    }
}