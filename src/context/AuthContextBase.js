// src/context/AuthContextBase.js
import { createContext } from 'react';

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = AuthContext.Provider;