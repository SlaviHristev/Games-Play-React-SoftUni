import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [formData, setFormData] = useState(initialState);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;