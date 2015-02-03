using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Khoolivia.Startup))]
namespace Khoolivia
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
