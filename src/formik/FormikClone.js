import React, { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const formikContext = createContext();

export function Formik({ initialValues, onSubmit, validate, children }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState();
  const providerValue = { values, onChange, onSubmit: onSubmitWrapper, errors };

  useEffect(() => {
    if (!validate) return;
    const errors = validate(values);
    setErrors(errors);
  }, [values, validate]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues(prev => ({...prev, [name]: value }));
  }

  function onSubmitWrapper(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <formikContext.Provider value={providerValue}>
      {children}
    </formikContext.Provider>
  )
}

export function Field(props) {
  const { values, onChange } = useContext(formikContext);

  const name = props.name;
  const Component = props.as;

  if(Component)
    return (
      <Component {...props} value={values[name]} onChange={onChange} />
    )

  return (
    <input {...props} value={values[name]} onChange={onChange} />
  )
}

export function ErrorMessage({ name, ...props }) {
  const { errors } = useContext(formikContext);
  return (
    <div style={{color: 'red'}} {...props}>{errors[name]}</div>
  )
}

export function Form({ children, ...props }) {
  const { onSubmit } = useContext(formikContext);
  const { as } = props;

  const Component = as;

  if (as)
    return (
      <Component {...props} onSubmit={onSubmit}>
      {children}
    </Component>
    );

  return (
    <form {...props} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
