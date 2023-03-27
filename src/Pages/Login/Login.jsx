import './Login.scss';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';


// import awsExports from '../../aws-exports';
import { FormSignIn } from './components/FormSignIn';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FormSignUp } from './components/FormSignUp';
import { FormConfirmSignUp } from './components/FormConfirmSignUp';

// Amplify.configure(awsExports);

export const Login = () => {
    return (
        <div className="login_wrapper">
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                    molestiae
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <Routes>
                                <Route path='*' element={<Navigate to="/sign-up" replace/>}/>
                                <Route path='/sign-in' element={<FormSignIn/>}/>
                                <Route path='/sign-up' element={<FormSignUp/>}/>
                                <Route path='/sign-up-verify' element={<FormConfirmSignUp/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
