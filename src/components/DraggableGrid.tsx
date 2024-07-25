// DraggableGrid.tsx
import {
	DndContext,
	DragEndEvent,
	MouseSensor,
	TouchSensor,
	closestCenter,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import {
	SortableContext,
	arrayMove,
	rectSortingStrategy,
	useSortable
} from '@dnd-kit/sortable'

import { CSS } from '@dnd-kit/utilities'
import { componentsMapping } from './componentMapping'
import { useCallback } from 'react'

interface SortableItemProps {
	id: string
}

const SortableItem: React.FC<SortableItemProps> = ({ id }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })
	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	}
	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{componentsMapping[id]}
		</div>
	)
}

interface DraggableGridProps {
	items: string[]
	setItems: React.Dispatch<React.SetStateAction<string[]>>
}

export const DraggableGrid: React.FC<DraggableGridProps> = ({
	items,
	setItems
}) => {
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

	const handleDragEnd = useCallback(
		(event: DragEndEvent) => {
			const { active, over } = event

			if (active.id !== over?.id) {
				setItems(items => {
					const oldIndex = items.indexOf(active.id as string)
					const newIndex = items.indexOf(over!.id as string)
					return arrayMove(items, oldIndex, newIndex)
				})
			}
		},
		[setItems]
	)

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={items} strategy={rectSortingStrategy}>
				<div className='overflow-hidden  flex flex-wrap justify-center gap-3 '>
					{items.map(id => (
						<SortableItem key={id} id={id} />
					))}
				</div>
			</SortableContext>
		</DndContext>
	)
}
