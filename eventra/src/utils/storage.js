// ================= EVENTS =================

export const getEvents = () => {
  return JSON.parse(localStorage.getItem("events")) || [];
};

export const saveEvent = (event) => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
};

// ================= REGISTRATIONS =================

export const getRegistrations = () => {
  return JSON.parse(localStorage.getItem("registrations")) || {};
};

export const saveRegistration = (eventId, userData) => {
  const registrations = getRegistrations();

  if (!registrations[eventId]) {
    registrations[eventId] = [];
  }

  registrations[eventId].push(userData);

  localStorage.setItem("registrations", JSON.stringify(registrations));
};

export const isRegistered = (eventId, email) => {
  const registrations = getRegistrations();

  if (!registrations[eventId]) return false;

  return registrations[eventId].some((user) => user.email === email);
};