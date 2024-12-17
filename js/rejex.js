function isValidName(name) {
    const nameRegex = /^[a-zA-Z]{3,}$/; // حروف فقط وطول لا يقل عن 3
    return nameRegex.test(name);
  }
  
  // 2. Validate Email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // صيغة البريد الإلكتروني
    return emailRegex.test(email);
  }
  
  // 3. Validate Password
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
