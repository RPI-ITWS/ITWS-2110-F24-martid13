### Post-reading Plans: 
- define specific user roles and responsibilities.
    - review user priviledges via chmod in shell.
- follow IaaS structure and make sure to securely manage data and programs.
    - review security of databases and websites to prevent easy in's to the network.
- review IAM (identity and access management).
    - look for 2FA option for azure login.
    - review VM user priviledges and set minimum level possible for all users (besides Dr. Callahan and TA's).
- look to utilize pre-existing network security features.
    - check to see if azure has a firewall I can enable.
    - check third party permissions, if any, applying zero-trust principle.
    - check to see if azure provides a security log or early warning system.
        - similarly, see if azure has an alert system for suspicious activity.
- investigate whether or not my vm data is public or private, and whether or not it is encrypted.
    - also see if azure allows for backing up user data locally for safe storage.
- generally, always prioritize safe coding practices and have a plan in case someone is able to gain access to sensitive data on my VM.

### Post-reading Implementation:
- reviewed azure user priviledges (zero-trust), all users have minimum priviledges possible.
- review user priviledges via chmod, all in check there.
- look over Azure Security Center.
- not able to find way to do local backup.
- not able to locate security alert system on Azure.
- choose not to use 2FA because of the low level of sensitivity of the data contained on my personal VM.