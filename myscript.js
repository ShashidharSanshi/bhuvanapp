 function handleCheck(checkbox) {
    const label = checkbox.nextElementSibling.textContent;
    const completedList = document.getElementById('completed-list');
    const sound = document.getElementById('clickSound');

    sound.currentTime = 0;
    sound.play();
  // Spark animation
  const spark = document.getElementById('spark-' + checkbox.id);
  spark.style.left = "40px";
  spark.style.top = "10px";
  spark.style.animation = "sparkle 0.6s ease-out";
  spark.style.opacity = 1;

  setTimeout(() => {
    spark.style.animation = "none";
    spark.style.opacity = 0;
  }, 600);
  
    if (checkbox.checked) {
      let item = document.createElement('li');
      item.textContent = label;
      item.setAttribute('data-id', checkbox.id);
      completedList.appendChild(item);
    } else {
      const items = completedList.querySelectorAll('li');
      items.forEach(li => {
        if (li.getAttribute('data-id') === checkbox.id) {
          li.remove();
        }
      });
    }
  }