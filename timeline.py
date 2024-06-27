import matplotlib.pyplot as plt

# Define tasks and weeks
tasks = ["Planning & Learning", "Frontend Development (React)", 
         "Backend Dev (Spring Boot) & DB Design", "Integration & Testing",
         "Advanced Features & Refinement", "Deployment & Documentation"]
weeks = range(1, 11)  # Weeks 1 to 10

# Set starting and ending weeks for each task based on the description
task_start_weeks = {
    "Planning & Learning": 1,
    "Frontend Development (React)": 3,
    "Backend Dev (Spring Boot) & DB Design": 5,
    "Integration & Testing": 7,
    "Advanced Features & Refinement": 9,
    "Deployment & Documentation": 10
}

task_end_weeks = {
    "Planning & Learning": 2,
    "Frontend Development (React)": 4,
    "Backend Dev (Spring Boot) & DB Design": 6,
    "Integration & Testing": 8,
    "Advanced Features & Refinement": 9,
    "Deployment & Documentation": 10
}

# Create the plot
fig, ax = plt.subplots(figsize=(10, 6))

# Draw bars for each task
for task, start_week, end_week in zip(tasks, task_start_weeks.values(), task_end_weeks.values()):
    ax.barh(task, end_week - start_week + 1, left=start_week - 1, label=task)

# Set labels and title
ax.set_xlabel("Weeks")
ax.set_ylabel("Project/Learning Steps")
ax.set_title("FDS System Development Timeline (10 Weeks)")

# Set grid and legend
ax.grid(axis='x', linestyle='--', alpha=0.6)
ax.legend()

plt.tight_layout()
plt.savefig("timelinephoto.png", dpi=300)
plt.show()
