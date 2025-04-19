
// You can enhance animations here if needed
window.onload = () => {
  document.querySelectorAll('.mentor, .course, .card').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
  });
}
// Basic Drag and Drop (requires more advanced logic for actual zone transfer)
let draggedItem = null;

function dragStart(event) {
  draggedItem = event.target;
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  if (event.target.classList.contains('zone')) {
      event.target.appendChild(draggedItem);
      draggedItem = null;
  }
}

document.querySelectorAll('.task-card').forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

document.querySelectorAll('.zone').forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('drop', drop);
});

// Planner Toggle (basic placeholder)
function showDailyView() {
  document.getElementById('planner-view').innerText = "Displaying Daily View";
}

function showWeeklyView() {
  document.getElementById('planner-view').innerText = "Displaying Weekly View";
}

function showMonthlyView() {
  document.getElementById('planner-view').innerText = "Displaying Monthly View";
}
// Basic Drag and Drop (requires more advanced logic for actual zone transfer)
function dragStart(event) {
    draggedItem = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    if (event.target.classList.contains('zone')) {
        event.target.appendChild(draggedItem);
        draggedItem = null;
    }
}

document.querySelectorAll('.task-card').forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

document.querySelectorAll('.zone').forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function addHabit() {
  const habitName = prompt("Enter the name of the new habit:");
  if (habitName) {
      const habitsList = document.getElementById('habits-list');
      const newHabitItem = document.createElement('li');
      newHabitItem.classList.add('habit-item');
      newHabitItem.innerHTML = `
          <span>${habitName}</span>
          <div class="habit-days">
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-sun">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-sun">Sun</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-mon">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-mon">Mon</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-tue">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-tue">Tue</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-wed">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-wed">Wed</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-thu">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-thu">Thu</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-fri">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-fri">Fri</label>
              <input type="checkbox" id="${habitName.toLowerCase().replace(/\s+/g, '-')}-sat">
              <label for="${habitName.toLowerCase().replace(/\s+/g, '-')}-sat">Sat</label>
          </div>
      `;
      habitsList.appendChild(newHabitItem);
      // You would likely want to save the new habit to local storage or a database here
  }
}
let moodHistory = loadMoodHistory();
displayMoodHistory();

function recordMood(mood) {
    const timestamp = new Date().toLocaleString();
    moodHistory.push({ mood: mood, timestamp: timestamp });
    saveMoodHistory();
    displayMoodHistory();
}

function saveMoodHistory() {
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
}

function loadMoodHistory() {
    const storedHistory = localStorage.getItem('moodHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
}

function displayMoodHistory() {
    const historyDiv = document.getElementById('mood-history');
    historyDiv.innerHTML = ''; // Clear previous history
    moodHistory.forEach(entry => {
        const moodEntryDiv = document.createElement('div');
        moodEntryDiv.classList.add('mood-entry');
        moodEntryDiv.innerHTML = `<span>${entry.mood}</span> - ${entry.timestamp}`;
        historyDiv.appendChild(moodEntryDiv);
    });
}
let focusTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60;   // 5 minutes in seconds
let currentTime = focusTime;
let breakCurrentTime = breakTime;
let timerInterval;
let isBreak = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const breakMinutesDisplay = document.getElementById('break-minutes');
const breakSecondsDisplay = document.getElementById('break-seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const breakDisplay = document.querySelector('.break-display');

function updateDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function updateBreakDisplay() {
    const minutes = Math.floor(breakCurrentTime / 60);
    const seconds = breakCurrentTime % 60;
    breakMinutesDisplay.textContent = String(minutes).padStart(2, '0');
    breakSecondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isBreak) {
            currentTime--;
            updateDisplay();
            if (currentTime < 0) {
                clearInterval(timerInterval);
                startBreak();
            }
        } else {
            breakCurrentTime--;
            updateBreakDisplay();
            if (breakCurrentTime < 0) {
                clearInterval(timerInterval);
                resetTimer(); // Or start focus again
            }
        }
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    isBreak = false;
    currentTime = focusTime;
    breakCurrentTime = breakTime;
    updateDisplay();
    updateBreakDisplay();
    breakDisplay.style.display = 'none';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function startBreak() {
    isBreak = true;
    breakDisplay.style.display = 'block';
    currentTime = breakTime; // Reset the main timer display for the break
    updateDisplay(); // Update the main timer to show break time initially
    breakCurrentTime = breakTime;
    updateBreakDisplay();
    // Optionally play a notification sound
    startTimer(); // Start the break timer
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display
updateDisplay();
updateBreakDisplay();
const dailyView = document.getElementById('daily-view');
const weeklyView = document.getElementById('weekly-view');
const monthlyView = document.getElementById('monthly-view');
const plannerViews = [dailyView, weeklyView, monthlyView];

function showView(viewToShow) {
    plannerViews.forEach(view => {
        if (view === viewToShow) {
            view.classList.remove('hidden');
            setTimeout(() => { // Small delay to trigger transition
                view.style.display = 'block';
            }, 0);
        } else {
            view.classList.add('hidden');
            setTimeout(() => {
                view.style.display = 'none';
            }, 300); // Match the transition duration
        }
    });
}
function showDailyView() {
  showView(dailyView);
}

function showWeeklyView() {
  showView(weeklyView);
}

function showMonthlyView() {
  showView(monthlyView);
}