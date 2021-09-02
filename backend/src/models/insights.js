import { Schema, model } from 'mongoose';

const tagChild = new Schema({
  id: {
    type: Number,
    unique: false,
  },
  name: {
    type: String,
    unique: false,
  },
});

const insightSchema = new Schema({
  id: {
    type: Number,
    unique: false,
  },
  texto: {
    type: String,
    require: true,
    unique: false,
  },
  data_criacao: {
    type: Date, required: false,
  },
  data_modificacao: {
    type: Date, required: false,
  },
  tags: {
    type: [tagChild],
  },

}, { timestamps: true });

export default model('insight', insightSchema);
