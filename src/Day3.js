import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        country: "",
        gender: "",
        message: "",

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        //ask the user to confirm their submit
        e.preventDefault();
        if(formData.name = '' || formData.email== '' || formData.dateOfBirth== '' || formData.country== '' || formData.gender== '' || formData.message== ''){
            return Swal.fire({
                title: "HOLD ON!!!",
                text: "Your data are missing, please submit all of them",
                icon: 'warning',
                confirmButtonText: 'OK'
        })
        }
        const isSubmit = await Swal.fire({
            title: "Are you sure to you want to submit?",
            text: "Your data will be send to our back-end system",
            icon: 'question',
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            showCloseButton: true,
            showCancelButton: true
        });
        if (!isSubmit.isConfirmed) {
            return;
        }
        onSubmit(formData);
        setFormData ({
            name: "",
        email: "",
        dateOfBirth: "",
        country: "",
        gender: "",
        message: "",
        });
        Swal.fire({
            title: "Well Done!",
            text: 'Your data has been submited',
            icon: 'success',
            confirmButtonText: 'Admit'

        })
    };
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Please enter your information</h1>

            <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="name" ></input>
            <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="email" ></input>
            <input value={formData.country} onChange={handleChange} type="country" name="country" placeholder="country" ></input>
            <input value={formData.dateOfBirth} onChange={handleChange} type="date" name="dateOfBirth" placeholder="dateOfBirth" ></input>
            <br />
            <select value={formData.gender} onChange={handleChange} name="gender" >
                <option value="">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Rather not to say">Rather not to say</option>
            </select>

            <input value={formData.message} onChange={handleChange} name="message" placeholder="message" ></input>
            {/* <hr></hr> */}
            <button type="submit">send</button>
        </form>
    );
}
const Day3 = () => {
    const [submissions, setSubmissions] = useState([]);
    const handleSubmit = (formData) => {
        setSubmissions([...submissions, formData]);
    }
    return (
        <div className="container">
            <h2>Comment form</h2>
            <Form onSubmit={handleSubmit}></Form>
            <div className="submissions">
                <h3>Received data</h3>
                {submissions.map((ss, index) => (
                    <div className="submission-item">
                        <p> <strong>Name: </strong>{ss.name}</p>
                        <p> <strong>email: </strong>{ss.email}</p>
                        <p> <strong>country: </strong>{ss.country}</p>
                        <p> <strong>Date of birth: </strong>{ss.dateOfBirth}</p>
                        <p> <strong>Gender: </strong>{ss.gender}</p>
                        <p> <strong>message: </strong>{ss.message}</p>
                    </div>

                ))}
            </div>
            <style jsx>
                {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            padding: 20px;
            magin: 0 auto;
            text-align: center;
            }
          .form {
            width: 300px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10 px rgba(0,0,0.1);
            margin-bottom: 20px; 
          }
          .form input, 
          .form textarea,
          .form select {
            margin: 10px 0;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-size: 16px;
            }
          .form textarea {
            min-height: 100px;
            resize: vertical;
            background-color: #c30f08;
            }
          .form button {
            margin: 10px 10px;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius:4px;
            font-size: 16px;
            cursor: pointer;
          }
            .submissions {
                width: 100%;
                max-width: 500px;
                margin-top: 20px;
                text-align: left;
            }
            .submission-item {
            background-color: white;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            box-shadow: 0 0 5px rgba(0,0,0,0.1);
            }

          `}
            </style>
        </div>
    );
}

export default Day3;