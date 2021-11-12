1) For our project, automated tests would be implemented with GitHub actions that would be triggered every time new code is pushed to the repo. 
   
2) No, you would use unit testing for individual functions
   
3) No, the message feature would have many smaller functions that should be tested individually instead of the whole messaging process as a whole.
   
4) Yes, this seems more managable to test with unit tests since the max message length is just a single aspect of the messaging feature that can be isolated. 