import { useState, useEffect } from "react";

export const useForm = (initalValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initalValues);

    const onChangeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValues);
        }

    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    };
};