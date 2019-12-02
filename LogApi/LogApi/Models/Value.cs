using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogApi.Models
{
    public class Value
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime Tarih { get; set; }
        public string LogType { get; set; }
    }
}
