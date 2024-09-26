using System;
using CoreWebApi.Models;

namespace CoreWebApi.Functionality
{
    public interface IUserOperation
    {
        public int createUser(User user);
        public int validateUser(string username, string password);
    }
}