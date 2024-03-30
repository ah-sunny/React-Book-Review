import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {
    const handleCreateAccount = () => {
        toast.success("Thank you for providing legal information.")
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Your Account</h1>
                        <p className="py-6">Your interest in creating an account has made our day! We are thrilled to have impressed you. Lets get started on this exciting journey together.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder=" Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleCreateAccount} className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default CreateAccount;