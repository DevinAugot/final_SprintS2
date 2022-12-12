import { useForm } from "react-hook-form";

const userName = "CodeExpert22";
const Password = "123";

export const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    alert("data submitted");
  };
  

  //   -----------------------------------------------------
  //   this gets the login credentials and consoles them
  //     const params = useParams();

  // useEffect(() => {
  //   const fetchLogin = async () => {
  //     const res = await fetch(`http://localhost:5000/logins`);
  //     const data = await res.json();

  //     console.log(data);

  //   };

  //   fetchLogin();
  // });

  // this also grabs the db.json information

  //   -----------------------------------------------------
  // =========Validation attempt===========//

  // const validation = ({ error, ...rest }) => {
  //     let checkValidation = false;

  //     Object.values(error).forEach(val => {
  //         if (val.length > 0) {
  //             checkValidation = false
  //         } else {
  //             checkValidation = true
  //         }

  //     });

  //     Object.values(rest).forEach(val => {
  //         if (val === null) {
  //             checkValidation = false
  //         } else {
  //             checkValidation = true
  //         }
  //     });

  //     return checkValidation;
  // };

  // =========Validation attempt===========//

  return (
    <>
      <div className="container w-25 p-3 background mt-5">
        {/* <h3 className='text-center'>Login Form</h3> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row my-3">
            <div className="col-9">
              <label className="custom-field">
                <input
                  className="input1"
                  type="text"
                  {...register("user name", {
                    required: true,password:"!22Coding23",
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                  })}
                  // placeholder="Enter User Name.."
                  required
                />
                <span className="placeholder">Enter User name...</span>
              </label>
              {errors.email && (
                <p className="error">Please enter valid Email !</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <label className="custom-field one">
                <input
                  className="input two"
                  type="text"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                  })}
                  required
                />
                {errors.password && (
                  <p className="error">Please enter valid Password !</p>
                )}
                <span className="placeholder one">Enter Password...</span>
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailForm;

// option 2 possibly !!!!!!!!

// import React from 'react';
//   const userName = "CodeExpert22";
//     const Password = "123456abc"

// class EmailForm extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;

//     this.setState({
//       input
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     if(this.validate()){
//         console.log(this.state);

//         let input = {};
//         input["username"] = "";

//         input["password"] = "";
//         input["confirm_password"] = "";
//         this.setState({input:input});

//          // this gets the login credentials and consoles them
//     // const params = useParams();

//    // need to get this validation working mabye reference db.json

//             if(input["username"] === userName && input["password"] === Password){
//                 alert("Succesfully logged in! Have Fun🤓")

//           }else if(input["username"] != userName && input["password"] != Password){
//             alert("Wrong infomartion sorry!")

//           }
//         // alert('Succesfully logged in');
//     }
//   }

//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;

//       if (!input["username"]) {
//         isValid = false;
//         errors["username"] = "Please enter your username.";
//       }

//       if (typeof input["username"] !== "undefined") {
//         const re = /^\S*$/;
//         if(input["username"].length < 6 || !re.test(input["username"])){
//             isValid = false;
//             errors["username"] = "Please enter valid username.";
//         }

//       }
//       // here is validating the dummy data to make sure user gets in with proper credentials also need to do for email!

//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password.";
//       }

//       if (!input["confirm_password"]) {
//         isValid = false;
//         errors["confirm_password"] = "Please enter your confirm password.";
//       }

//       if (typeof input["password"] !== "undefined") {
//         if(input["password"].length < 6){
//             isValid = false;
//             errors["password"] = "Please add at least 6 characters.";
//         }
//       }

//       if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

//         if (input["password"] != input["confirm_password"]) {
//           isValid = false;
//           errors["password"] = "Passwords don't match.";
//         }

//       }

//       this.setState({
//         errors: errors
//       });

//       return isValid;
//   }

//   render() {

//     return (

//       <div className="Log-In">

//         <form onSubmit={this.handleSubmit}>

//           <div class="form-group">
//             <label for="username">Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={this.state.input.username}
//               onChange={this.handleChange}
//               class="form-control"
//               placeholder="Enter username"
//               id="username" />

//               <div className="text-danger">{this.state.errors.username}</div>
//           </div>

//           <div class="form-group">
//             <label for="password">Password:</label><br />
//             <input
//               type="password"
//               name="password"
//               value={this.state.input.password}
//               onChange={this.handleChange}
//               class="form-control"
//               placeholder="Enter password"
//               id="password" />

//               <div className="text-danger">{this.state.errors.password}</div>
//           </div>

//           <div class="form-group">
//             <label for="password">Confirm Password:</label>
//             <input
//               type="password"
//               name="confirm_password"
//               value={this.state.input.confirm_password}
//               onChange={this.handleChange}
//               class="form-control"
//               placeholder="Enter confirm password"
//               id="confirm_password" />

//               <div className="text-danger">{this.state.errors.confirm_password}</div>
//           </div>
//              {/* need to make this submit button go to feed page  */}
//           <input type="submit" value="Log In" class="btn btn-success" />
//         </form>
//       </div>
//     );

//   }

// }

// export default EmailForm;
