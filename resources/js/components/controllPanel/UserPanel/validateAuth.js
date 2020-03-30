const validateAuth = values => {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
        errors.firstName = "First Name must be at least 2 character";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length < 2) {
        errors.lastName = "Last Name must be at least 2 character";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 character";
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = "Required";
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "Passwords do not match";
    } else if (values.password.length < 6) {
        errors.password = "Password Confirmation must be at least 6 character";
    }

    return errors;
};

export default validateAuth;
