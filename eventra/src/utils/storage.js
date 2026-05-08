const EVENT_KEY = "events";
const REG_KEY = "registrations";

/* ================= EVENTS ================= */

// Get all events
export const getEvents = () => {
  return JSON.parse(localStorage.getItem(EVENT_KEY)) || [];
};

// Save new event
export const saveEvent = (event) => {
  const events = getEvents();

  events.push(event);

  localStorage.setItem(
    EVENT_KEY,
    JSON.stringify(events)
  );
};

// Delete event
export const deleteEvent = (id) => {

  // Remove selected event
  const updatedEvents = getEvents().filter(
    (event) => event.id !== id
  );

  localStorage.setItem(
    EVENT_KEY,
    JSON.stringify(updatedEvents)
  );

  // ALSO remove registrations of deleted event
  const updatedRegs = getRegistrations().filter(
    (reg) => reg.eventId !== id
  );

  localStorage.setItem(
    REG_KEY,
    JSON.stringify(updatedRegs)
  );
};

/* ================= REGISTRATIONS ================= */

// Get all registrations
export const getRegistrations = () => {
  return JSON.parse(localStorage.getItem(REG_KEY)) || [];
};

// Save registration
export const saveRegistration = (registration) => {

  const regs = getRegistrations();

  regs.push(registration);

  localStorage.setItem(
    REG_KEY,
    JSON.stringify(regs)
  );
};

// Total registrations count
export const getTotalRegistrations = () => {
  return getRegistrations().length;
};

// Registrations for specific event
export const getRegistrationsByEvent = (eventId) => {

  return getRegistrations().filter(
    (reg) => reg.eventId == eventId
  );
};