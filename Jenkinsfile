pipeline {
    agent any
    stages {
        stage('Code Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'git-cred',
                    url: 'https://github.com/Level-p/Next-Hamster.git'
            }
        }

        stage('Code Analysis with SonarQube') {
    environment {
        SONAR_PROJECT_KEY   = 'next-hamster'
        SONAR_PROJECT_NAME  = 'Next Hamster App'
        SONAR_SOURCES       = './src' // only source
    }
    steps {
        withSonarQubeEnv('sonarqube') { // Must match the name in Jenkins global config
            sh '''
                npm install
                # Run SonarQube scan
                npx sonar-scanner \
                    -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                    -Dsonar.projectName="${SONAR_PROJECT_NAME}" \
                    -Dsonar.sources=${SONAR_SOURCES} \
                    -Dsonar.sourceEncoding=UTF-8
            '''
        }
    }
}


        stage("Quality Gate") {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Dependency check') {
            steps {
                withCredentials([string(credentialsId: 'nvd-key', variable: 'NVD_API_KEY')]) {
                    dependencyCheck additionalArguments: "--scan ./ --disableYarnAudit --disableNodeAudit --nvdApiKey $NVD_API_KEY",
                        odcInstallation: 'DP-Check'
                }
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        // Uncomment if you want Checkov scan
        /*
        stage('Install Checkov') {
            steps {
                sh '''
                sudo yum install -y python3 python3-pip
                python3 -m pip install --upgrade pip
                python3 -m pip install checkov --quiet
                export PATH=$PATH:$(python3 -m site --user-base)/bin
                checkov --version || echo "Checkov installation failed"
                '''
            }
        }
        
        stage('Infrastructure Security Scan') {
            steps {
                sh '''
                    export PATH=$PATH:$(python3 -m site --user-base)/bin
                    checkov -d . --output cli || true
                '''
            }
        }
        */

        stage('Build Artifact') {
            steps {
                sh "sudo rm -rf /var/lib/jenkins/workspace/Hamster /var/lib/jenkins/workspace/Hamster@2 /var/lib/jenkins/workspace/Hamster@3 /var/lib/jenkins/workspace/Hamster@4"
                sh 'npm install --package-lock'
                sh 'npm run build'
            }
        }

        stage('Push Artifact to Ansible') {
            steps {
                echo 'Push to Ansible stage — implement as needed'
            }
        }

        stage('Build docker image') {
            steps {
                sshagent(['ansible-key']) {
                    sh 'ssh -t -t ubuntu@3.10.151.178 -o StrictHostKeyChecking=no "ansible-galaxy collection install community.docker"'
                    sh 'ssh -t -t ubuntu@3.10.151.178 -o StrictHostKeyChecking=no "cd /etc/ansible && ansible-playbook /opt/docker/docker-image.yml"'
                }
            }
        }

        stage('Trivy image scan') {
            steps {
                sh "trivy image cloudhight/testapp > trivyfs.txt"
            }
        }

        stage('Deploy to stage') {
            steps {
                sshagent(['ansible-key']) {
                    sh "ssh -t -t ubuntu@3.10.151.178 -o StrictHostKeyChecking=no \"cd /etc/ansible && ansible-playbook /opt/docker/docker-container.yml\""
                }
            }
        }

        stage('check stage website availability') {
            steps {
                sh "sleep 90"
                script {
                    def response = sh(script: "curl -s -o /dev/null -w \"%{http_code}\" https://stage1.steven12.space", returnStdout: true).trim()
                    if (response == "200") {
                        slackSend(color: 'good', message: "The stage Nextjs Hamster application is up and running with HTTP status code ${response}.", tokenCredentialId: 'slack-cred')
                    } else {
                        slackSend(color: 'danger', message: "The stage Nextjs Hamste application appears to be down with HTTP status code ${response}.", tokenCredentialId: 'slack-cred')
                    }
                }
            }
        }

        stage('Request for Approval') {
            steps {
                timeout(activity: true, time: 2, unit: 'MINUTES') {
                    input message: 'Needs Approval ', submitter: 'admin'
                }
            }
        }

        stage('Deploy to Prod') {
            steps {
                sshagent(['ansible-key']) {
                    sh "ssh -t -t ubuntu@3.10.151.178 -o StrictHostKeyChecking=no \"cd /etc/ansible && ansible-playbook /opt/docker/docker-container.yml\""
                }
            }
        }
    }
}
