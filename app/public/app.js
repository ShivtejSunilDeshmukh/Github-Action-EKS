async function loadApplicationInfo() {
  try {
    const response = await fetch("/api/info");

    if (!response.ok) {
      throw new Error("Failed to load application information");
    }

    const data = await response.json();

    document.getElementById("appName").textContent =
      data.name;

    document.getElementById("appVersion").textContent =
      data.version;

    document.getElementById("environment").textContent =
      data.environment;

    document.getElementById("platform").textContent =
      data.platform;

  } catch (error) {

    console.error(error);

    document.getElementById("appName").textContent =
      "Unavailable";

  }
}


async function checkHealth() {

  const result =
    document.getElementById("healthResult");

  result.textContent =
    "Checking application health...";

  try {

    const response =
      await fetch("/health");

    const data =
      await response.json();

    if (response.ok) {

      result.innerHTML =
        `✓ Backend is healthy · ${new Date(
          data.timestamp
        ).toLocaleTimeString()}`;

      result.style.color =
        "#4ade80";

    } else {

      throw new Error("Application unhealthy");

    }

  } catch (error) {

    result.textContent =
      "✕ Backend health check failed";

    result.style.color =
      "#f87171";

  }
}


function updateClock() {

  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleString();

}


document
  .getElementById("healthButton")
  .addEventListener(
    "click",
    checkHealth
  );


loadApplicationInfo();

updateClock();

setInterval(updateClock, 1000);
