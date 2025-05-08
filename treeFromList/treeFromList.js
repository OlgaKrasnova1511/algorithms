const categories = [
    { title: "Приготовление напитков", parent: "Техника для кухни" },
    { title: "Техника для дома", parent: "Бытовая техника" },
    { title: "Варочные панели", parent: "Встраиваемая техника" },
    { title: "Бытовая техника", parent: null },
    { title: "Встраиваемая техника", parent: "Бытовая техника" },
    { title: "Духовые шкафы", parent: "Встраиваемая техника" },
    { title: "Продукты питания", parent: null },
    { title: "Электрочайники и термопоты", parent: "Техника для кухни" },
    { title: "Вытяжки", parent: "Встраиваемая техника" },
    { title: "Техника для кухни", parent: "Бытовая техника" },
  ];

  function buildTree(list, parent = null) {
    return list
      .filter(item => item.parent === parent)
      .map(item => ({
        title: item.title,
        children: buildTree(list, item.title)
      }));
  }

  const tree = buildTree(categories);
  console.log(JSON.stringify(tree, null, 2));