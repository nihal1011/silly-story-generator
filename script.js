const customName = document.getElementById('customName');
const generateButton = document.getElementById('generate');
const story = document.getElementById('story');

const storyTemplate = `It was a wild day when :insertx: went on an adventure. First, they ended up at :inserty:, and without warning, :insertz:. Bob, who was nearby, simply said, “That’s so :insertx:!”`;

const insertX = [
  'Santa Claus', 
  'Bigfoot', 
  'Donald Duck', 
  'An Alien', 
  'A Ninja', 
  'A Talking Cat', 
  'The Invisible Man', 
  'Super Mario'
];

const insertY = [
  'a volcano', 
  'the moon base', 
  'a submarine', 
  'the jungle gym', 
  'a haunted house', 
  'a giant pineapple', 
  'a rollercoaster', 
  'a floating castle'
];

const insertZ = [
  'turned into a chicken', 
  'sang opera loudly', 
  'started doing backflips', 
  'teleported into a potato sack', 
  'did the cha-cha slide', 
  'spontaneously combusted', 
  'became invisible', 
  'flew away with balloons'
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

generateButton.addEventListener('click', () => {
  let newStory = storyTemplate;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  story.textContent = newStory;
});
