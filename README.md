# Continous-Integration
This is the repository for the Continuous Integration Project for the second exam of the Software Engineer class. It uses Circle CI for the CI environment and employs integrations with SonarCloud, Render, Jira, and Slack. The technologies used are Node.js, ESLint, HTMLLint, Mocha, NYC, and Cypress. 


##  Technologies Used

- **Circle CI:** Workflow automation
- **Mocha NYC:** Unit testing and Test Coverage
- **ESLint:** JavaScript linter
- **HTMLHint:** HTML linter
- **Cypress:** End-to-end testing
- **Jira:** Project management
- **Slack:** Notifications and team communication

##  How to Run the Project

Follow these steps to clone and run the project in your local environment:

```bash
# Clone the repository
git clone https://github.com/Andre-Leandro/Continous-Integration.git

# Navigate to the project directory
cd Continous-Integration

# Install dependencies
npm install
```


## Quality Gate for Sonar Cloud

**Coverage**                   | **Code Smells**               | **Duplicated Lines**             | **Maintainability Rating**    | **Reliability Rating**       | **Security Hotspots Reviewed**
-------------------------------|-------------------------------|----------------------------------|-------------------------------|-------------------------------|-------------------------------
is less than 80.0%             | is greater than 5             | is greater than 3.0%             | is worse than A               | is worse than A               | is less than 100%

   

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Andre-Leandro_Continous-Integration)](https://sonarcloud.io/summary/new_code?id=Andre-Leandro_Continous-Integration)
