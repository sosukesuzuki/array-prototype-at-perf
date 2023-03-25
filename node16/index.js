const { PerformanceObserver, performance } = require("node:perf_hooks");

const marks = {
  propertyAccess: {
    start: "START_PROPERTY_ACCESS",
    end: "END_PROPERTY_ACCESS",
  },
  arrayPrototypeAt: {
    start: "START_ARRAY_PROTOTYPE_AT",
    end: "END_ARRAY_PROTOTYPE_AT",
  },
};

const observer = new PerformanceObserver((items) => {
  const perfEntries = items
    .getEntries()
    .sort((a, b) => (a.name.length < b.name.length ? 1 : -1));
  for (const perfEntry of perfEntries) {
    const targetLength = perfEntries[0].name.length;
    console.log(
      perfEntry.name.padEnd(targetLength, " "),
      `${perfEntry.duration} ms`
    );
  }
  performance.clearMarks();
});

observer.observe({ type: "measure" });

const array = [1, 2, 3];

performance.mark(marks.propertyAccess.start);
for (let i = 0; i < 1e8; i++) {
  array[array.length - 1];
}
performance.mark(marks.propertyAccess.end);

performance.measure(
  "array[array.length -1]",
  marks.propertyAccess.start,
  marks.propertyAccess.end
);

performance.mark(marks.arrayPrototypeAt.start);
for (let i = 0; i < 1e8; i++) {
  array.at(-1);
}
performance.mark(marks.arrayPrototypeAt.end);

performance.measure(
  "array.at(-1)",
  marks.arrayPrototypeAt.start,
  marks.arrayPrototypeAt.end
);
