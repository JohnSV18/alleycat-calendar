module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        location: String,
        date:  { type: Date, default: Date.now }
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Race = mongoose.model("race", schema);
    return Race;
  };