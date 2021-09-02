import * as Yup from 'yup';
import insightSchema from '../models/insights';

class InsightsController {
  async index(request, response) {
    try {
      const card = await insightSchema.find();

      if (!card) {
        return response.status(400).json({
          message: 'Card não encontrado !!!',
        });
      }

      return response.json(card);
    } catch (error) {
      console.log('error', error);
      return response.status(400).json({
        erros: 'Houve um problema ao buscar as listas de insight!!!',
      });
    }
  }

  async create(request, response) {
    const schema = Yup.object().shape({
      texto: Yup.string().required(),
      tags: Yup.string(),
    });
    const {
      texto,
      tags,
    } = request.body;

    try {
      await schema.isValid(request.body);
    } catch (error) {
      return response.status(400).send({ error: 'Register failed' });
    }
    const createCard = await insightSchema.create({
      texto,
      tags,
    });

    return response.json(createCard);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      texto: Yup.string().required(),
      tags: Yup.string(),
    });
    const { id } = request.params;
    const {
      texto,
      tags,
    } = request.body;

    try {
      await schema.isValid(request.body);
    } catch (error) {
      return response.status(400).send({ error: 'Update failed' });
    }
    const createCard = await insightSchema.findByIdAndUpdate(id, {
      texto,
      tags,
    }, { new: true });

    await createCard.save();

    return response.json(createCard);
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          erros: 'id não enviado',
        });
      }

      await insightSchema.findByIdAndRemove(id);

      return response.json({
        message: 'Deletado com sucesso!!!',
      });
    } catch (error) {
      return response.status(400).json({
        erros: 'Não foi possivel deletar o card!',
      });
    }
  }

  async findTag(request, response) {
    try {
      const {
        texto,
      } = request.body;
      const card = await insightSchema.find();
      const filter = card.find((cards) => cards.tags.some((value) => value.name.includes(texto)));
      return response.json(filter);
    } catch (error) {
      console.log('error', error);
      return response.status(400).json({
        erros: 'Não foi possivel localizar a tag!',
      });
    }
  }
}

export default new InsightsController();
