using System;
using CoreWebApi.Database;
using CoreWebApi.Functionality;
using CoreWebApi.Models;

namespace CoreWebApi.Service
{
    public class UserService : IUserOperation
    {
        UserDbContext userDbContext;
        public UserService()
        {
            userDbContext = new UserDbContext();
        }

        int IUserOperation.createUser(User user)
        {
            userDbContext.Users.Add(user);
            return userDbContext.SaveChanges();
        }

        int IUserOperation.validateUser(string username, string password)
        {
            var result = userDbContext.Users.Where(a => a.Username == username && a.Password == password).FirstOrDefault();
            if(result == null)
            {
                return 0;
            }
            return 1;
        }
    }
}