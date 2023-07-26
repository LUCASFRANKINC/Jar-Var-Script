class ValidationError extends Error {
  constructor(message, type) {
    super(message);
    this.type = type;
    this.name = "Validation Error";
  }
}

const emailChecker = (email) => {
  let message = "";
  try {
    let quotedMailRegXp;
    if(email.charAt(0) === '"') {
      console.log("Has quotes");
      quotedMailRegXp = /^".*"?@(?:[^!#$%&'*+-/=?^_`{|}~\.]+(?:-|\.)?){1,}$/g;
    }
    else {
      quotedMailRegXp = /^[^@]+@[^@\.]+\..+[^\W]$/g;
    }
    
    if (quotedMailRegXp.test(email)) {
      message = `${email} is valid!`;
    } else throw new ValidationError("Email input is invalid!", "Email Error");
  } catch (error) {
    if (error instanceof ValidationError && error.name === "Validation Error") {
      console.log("A validation error occurred!");
    }
    const { message, name, type, stack } = error;
    console.table({ message, name, type, stack });
  } finally {
    return message;
  }
};

let prompta = prompt("Enter:\n1 - check phone number\n2 - check email address");
let isValid = false;
if (Number(prompta) === 1) {
  let num = prompt("Enter phone number", "");
  if (!num) throw "Invalid phone number format!";
  const regXp = /^(?:\d{3}|\(\d{3}\))([\/\.-])(?:\d{3})\1(?:\d{6})$/;
  console.table({
    "Original string:": num,
    "Is valid:": regXp.test(num),
  });
} else {
  let email = prompt("Enter email address:", "");
  if (!email) throw "Invalid email address!";
  console.log(emailChecker(email));
}
