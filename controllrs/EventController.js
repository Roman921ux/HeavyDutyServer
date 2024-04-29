import EventModel from '../models/Event.js'

export const removeOne = async (req, res) => {
  try {
    const eventId = req.params.id
    const doc = await EventModel.findOneAndDelete({ _id: eventId });

    if (!doc) {
      return res.status(404).json({ message: 'Событие не найдено' });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(5000).json({
      message: 'Не удалось удалить event'
    })
  }
}

export const getAll = async (req, res) => {
  try {
    const events = await EventModel.find({ user: req.userId });
    // const events = await EventModel.find().populate('user').exec();
    // свяжет вторую модель User по id, здесь token не нужен

    res.json(events)
  } catch (error) {
    res.status(400).json({
      message: 'Не получилось вернуть events'
    })
  }
}

export const createEvent = async (req, res) => {
  try {
    const doc = new EventModel({
      title: req.body.title,
      description: req.body.description,
      start: req.body.start,
      approaches: req.body.approaches,
      user: req.userId,
    })

    const event = await doc.save()
    res.json(event)
  } catch (error) {
    res.status(400).json({
      message: 'Event не создался'
    })
  }
}

export const createEventApproach = async (req, res) => {
  try {
    const eventId = req.body.eventId; // ID события
    const newApproach = req.body.newApproach; // Новый объект, на который нужно создать

    const updatedEvent = await EventModel.findByIdAndUpdate(
      eventId,
      { $push: { approaches: newApproach } },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Событие не найдено' });
    }

    res.json({ message: 'Новый объект в массиве approaches успешно создан' });
  } catch (error) {
    res.status(500).json({ message: 'Произошла ошибка при создании нового объекта в массиве approaches' });
  }
}

export const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id; // ID события
    const approachId = req.body.approachId; // ID объекта в массиве approaches
    const newApproach = req.body.approach; // Новый объект, на который нужно заменить старый

    const updatedEvent = await EventModel.updateOne(
      { _id: eventId, 'approaches._id': approachId }, // Фильтр для нахождения события и объекта в массиве approaches
      { $set: { 'approaches.$': newApproach } } // Замена найденного объекта новым объектом в массиве approaches
    );

    if (updatedEvent.nModified === 0) {
      return res.status(404).json({ message: 'Не удалось найти событие или объект в массиве approaches' });
    }

    res.json({ message: 'Объект в массиве approaches успешно заменен' });
  } catch (error) {
    res.status(500).json({ message: 'Произошла ошибка при обновлении подхода' });
  }
}