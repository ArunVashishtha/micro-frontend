
addEventListener('message', ({ data }) => {
  const result = performHeavyTask(data);
  postMessage(result);
});

function performHeavyTask(data: any) {
  // Example heavy task, like calculating factorial or any other logic
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(i);
  }
  return result;
}
