import logo from '../logo.svg';
import '../App.css';
function Login() {
  
    
  function handleForm(event) {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData (event.currentTarget);
    const un = data.get("un");
    const pw = data.get("pw");
    console.log(un+" --- "+pw);
  }

  return (
    <form  onSubmit={handleForm}>
      
    <div className='wrapper' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
          
           
          <div style={{ border:"6px solid Black" }} className="App-login">
            <p >CK COMPANY</p>
            <div style={{ border:"1px solid Black" }} className="">
              User Name: <input type="text" placeholder='un' name="un"/>
              <br/>
              Password: <input type="password" placeholder='pw' name="pw"/>
              <br/><br/>
              <input type="submit" value="Login" />
            
          </div>
          </div>
          </div>
          </form>
          
  
  );
}

export default Login