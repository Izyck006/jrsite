# Project Title

Student Management System - IT Department, Federal University Dutse

# Introduction

This project is a web-based student management system for the Information Technology Department of the Federal University Dutse. It provides a platform for students to manage their academic activities and for administrators to manage the system's users and content.

The system is built using HTML, CSS, and JavaScript. It features separate dashboards for students and administrators, each with functionalities tailored to their roles.

# Features

## Student Features:

*   **Authentication:** Students can sign up and log in to the system.
*   **Dashboard:** A personalized dashboard provides an overview of their academic information.
*   **Course Registration:** Students can register for courses for the semester.
*   **View Courses:** Students can view the courses they have registered for.
*   **Submit Complaints:** A feature to submit complaints or feedback.
*   **Newsletter:** View newsletters published by the department.
*   **University Calendar:** Access the university's academic calendar.
*   **NoteSlide:** Access lecture slides and notes.
*   **Profile:** Manage their profile information.

## Admin Features:

*   **Authentication:** Administrators have a separate login.
*   **Dashboard:** An admin dashboard provides an overview of the system.
*   **Manage Users:** Add, edit, and delete student and other user accounts.
*   **Upload Courses:** Upload and manage courses offered by the department.
*   **System Settings:** Configure system-wide settings.
*   **Newsletter Management:** Upload and manage newsletters.
*   **Calendar:** Manage the academic calendar.
*   **NoteSlide:** Upload and manage lecture slides.
*   **Attendance:** Manage student attendance.
*   **Profile:** Manage their admin profile.

# File Structure

The project is organized into the following directories and files:

```
c:\Users\hp\Desktop\SC-WEB\
├───Admin_dashboard.html
├───Admin_Profile.html
├───attendance.html
├───calendar.html
├───complaint.html
├───Course_registration.html
├───courses_upload.html
├───index.html
├───login.html
├───manage_newsletter.html
├───Manage_users.html
├───noteslide.html
├───Profile.html
├───register-courses.html
├───signup.html
├───Student_dashboard.html
├───student_newsletter.html
├───Student_Profile.html
├───System_settings.html
├───university_calendar.html
├───upload_newsletter.html
├───view-courses.html
├───.git\...
├───.vscode\
│   ├───launch.json
│   └───settings.json
├───images\
│   ├───Fud.jpg
│   └───Nacos.jpg
├───Script\
│   ├───Admin_dashboard.js
│   ├───attendance.js
│   ├───calendar.js
│   ├───login.js
│   ├───noteslide.js
│   ├───signup.js
│   ├───Student_dashboard.js
│   ├───Student_Profile.js
│   └───university_calendar.js
└───style\
    ├───Admin_dashboard.css
    ├───attendance.css
    ├───calendar.css
    ├───complaint.css
    ├───courses_upload.css
    ├───index.css
    ├───login.css
    ├───noteslide.css
    ├───profile.css
    ├───register-courses.css
    ├───signup.css
    ├───student_dashboard.css
    └───view-courses.css
```

# Getting Started

To get a local copy up and running, follow these simple steps.

## Prerequisites

You will need a web browser to run this project.

## Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Open the `index.html` file in your web browser.

# Usage

## Student

1.  Navigate to the `signup.html` page to create an account.
2.  Log in using your credentials on the `login.html` page.
3.  You will be redirected to the student dashboard.
4.  From the dashboard, you can access all the student features.

## Admin

1.  Use the following credentials to log in as an admin on the `login.html` page:
    *   **Username:** Admin@IT
    *   **Password:** InfoTech
2.  You will be redirected to the admin dashboard.
3.  From the dashboard, you can manage users, courses, and other system settings.

# Class Diagram

![Student Management System Class Diagram](https://www.gleek.io/wp-content/uploads/2022/09/student-management-system-class-diagram-example.png)

# Use Case Diagram

![Student Management System Use Case Diagram](https://www.researchgate.net/profile/Babak-Vakilian/publication/333867337/figure/fig2/AS:771433778249728@1560937191926/Use-Case-Diagram-of-Student-Management-System.png)

This Use Case Diagram provides a visual representation of the interactions between the users (actors) and the Student Management System. It highlights the main functionalities available to each type of user.

### Actors

*   **Student:** A registered user of the system who performs academic-related activities.
*   **Administrator:** A privileged user responsible for managing the system, its users, and its content.

### Student Use Cases

*   **Login/Logout:** Securely access and exit the system.
*   **Register:** Create a new student account.
*   **View Dashboard:** See a personalized overview of academic information.
*   **Course Registration:** Register for courses at the beginning of a semester.
*   **View Registered Courses:** See a list of currently enrolled courses.
*   **Submit Complaints:** Send feedback or complaints to the administration.
*   **View Newsletter:** Read newsletters published by the department.
*   **Access University Calendar:** View the official academic calendar.
*   **Access Lecture Materials:** View or download lecture slides and notes.
*   **Manage Profile:** Update personal information.

### Admin Use Cases

*   **Login/Logout:** Securely access and exit the system.
*   **Manage Users:** Add, edit, and delete user accounts.
*   **Manage Courses:** Upload, update, and remove courses.
*   **Manage System Settings:** Configure overall system parameters.
*   **Manage Newsletters:** Publish and remove newsletters.
*   **Manage Calendar:** Update the academic calendar.
*   **Manage Lecture Materials:** Upload and remove lecture slides and notes.
*   **Manage Attendance:** Track and update student attendance records.
*   **Manage Profile:** Update personal admin information.

# Sequence Diagram

![Student Management System Sequence Diagram](code-diagram.png)

This sequence diagram illustrates the use case of a student registering for a course. The process is as follows:

1.  **Login:** The student enters their credentials to log into the system.
2.  **View Courses:** The student navigates to the course registration page to view a list of available courses.
3.  **Select Course:** The student selects a course from the list.
4.  **Confirm Registration:** The student confirms their selection.
5.  **System Verification:** The system verifies that the student is eligible to register for the selected course (e.g., checks for prerequisites, schedule conflicts).
6.  **Enrollment:** Upon successful verification, the system enrolls the student in the course and updates the student's record.

# Activity Diagram

![Student Management System Activity Diagram](https://www.edrawmax.com/images/examples/student-management-system-activity-diagram.png)

This activity diagram shows the workflow for a student checking their attendance. The steps are as follows:

1.  **Login:** The student starts by logging into the system.
2.  **Access Attendance:** The student selects the option to view their attendance.
3.  **View Attendance Record:** The system displays the student's attendance record for various courses.
4.  **Select Course:** The student can choose to view detailed attendance for a specific course.
5.  **Generate Report:** The student can request a report of their attendance.
6.  **Logout:** The student logs out of the system.

# Data Flow Diagram

![Student Management System Data Flow Diagram](https://www.edrawmax.com/images/examples/student-management-system-dfd.png)

This Data Flow Diagram (DFD) illustrates how data moves through the Student Management System. It shows the key processes, data stores, and external entities involved.

*   **External Entities:** These are the users who interact with the system, including **Students** and **Administrators**.
*   **Processes:** These are the actions that transform data within the system, such as **Login**, **Course Registration**, **Manage Users**, and **Generate Reports**.
*   **Data Stores:** This is where the system's data is stored, such as the **Student Database**, **Course Database**, and **Attendance Database**.

The diagram shows how students and administrators provide input to the system, which is then processed and stored. For example, a student provides their information during registration, which is then stored in the student database. The administrator can then access this data to manage the student's account.

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request