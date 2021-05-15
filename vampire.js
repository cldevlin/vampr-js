class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let counter = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      counter++;
    }
    return counter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let output = this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
    return output;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let senior;
    let junior
    if (this.isMoreSeniorThan(vampire)) {
      senior = this;
      junior = vampire;
    } else {
      senior = vampire;
      junior = this;
    }

    let distanceFromRoot1 = senior.numberOfVampiresFromOriginal;
    let distanceFromRoot2 = junior.numberOfVampiresFromOriginal;

    for (let i = 0; i < distanceFromRoot2 - distanceFromRoot1; i++) {
      junior = junior.creator;
    }
    console.log("senior", senior);
    console.log("junior", junior);

    // let currentAncester = senior;
    let commonAncester = "";
    // check junior vamp's ancestor at the same seniority of senior vamp

    //loop through older vamps ancestors
    // while (!commonAncester) {
    //   if (senior === junior) {

    //   }
    // }

  }
}

module.exports = Vampire;

