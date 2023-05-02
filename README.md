# vite-design-token-test

Send tokens to github 
https://api.github.com/repos/:username/:repo/dispatches
needs access token
needs style dictionary from amazon
test figma 

Figma for this repo
https://www.figma.com/file/Nqhhjhk5y4to2WjiOIvnk9/Testing-Design-Tokens-Github?node-id=0%3A1&t=CziaLvXjFMlX6gMN-1

## Debugging notes
- check repo settings > actions > general > Workflow permissions
  - "allow github actions to create and approve pull requests"
- Create personal access tokens 
  - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - make sure repo and actions are checked
- URL to send https://api.github.com/repos/:username/:repo/dispatches
  - EXample for this one https://api.github.com/repos/amandaIariaVelir/vite-design-token-test/dispatches



## Notes

Figma Plugin
https://www.figma.com/community/plugin/888356646278934516/Design-Tokens

Figma Plugin Github
https://github.com/lukasoppermann/design-tokens

Design Token transformer repo (a lot is based off of this repo)
https://github.com/lukasoppermann/design-token-transformer

Style dictionary from amazon
https://amzn.github.io/style-dictionary/#/

Set up slack notifications to help seeing this automatically happen. 
- Notifications should not be like when subscribing via the github app in slack
- just one notification in main project channel when it design tokens hit the github actions.
  - "Design Tokens have been updated"
  - Which will help us know if a design has been updated

What should not happen.
- Designers should not be handing off the JSON file it should be going straight to the server via "send to url"
- The only time devs should running the transform is to debug and make sure all of the output is going where it should be going.