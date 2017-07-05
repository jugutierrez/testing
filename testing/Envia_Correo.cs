using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Postal;
namespace testing
{
    public class Envia_Correo
    {

        public void enviar()
        {
    dynamic email = new Email("Example");
        email.To = "ju.gutierreza@hotmail.com";
            email.Message = "lalalal";
            email.Subject = "lol";
            email.Send();
        }
    
    }
}