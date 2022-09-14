import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const FormikCloneContext = createContext();

function FormikCloneContextProvider({ children }) {
  const [values, setValues] = useState(null);
  
  const providerValue = {values, setValues};

  return (
    <FormikCloneContext.Provider value={providerValue}>
      {children}
    </FormikCloneContext.Provider>
  )
}

function useFormikClone({initialValues}) {
  const {values, setValues} = useContext(FormikCloneContext);

  useEffect(() => {
    setValues(initialValues);
  }, []);
 

  return ({ values, setValues });
}

export { FormikCloneContextProvider, useFormikClone }