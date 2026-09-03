import { useCallback, useEffect, useState } from 'react';

export const useScrollNavigation = (refsArray) => {
	const [navigatorIndex, setNavigatorIndex] = useState(0);

	const jumpTo = useCallback(
		(targetRef) => {
			const targetRefObject = typeof targetRef === 'number' ? refsArray[Math.max(0, Math.min(targetRef, refsArray.length - 1))] : targetRef;

			if (targetRefObject && targetRefObject.current) {
				if (targetRefObject.current.tagName === 'VIDEO') {
					const videoElement = targetRefObject.current;
					videoElement.currentTime = 0;
				}

				targetRefObject.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center',
				});

				const newIndex = refsArray.findIndex((ref) => ref === targetRefObject);
				if (newIndex !== -1) {
					setNavigatorIndex(newIndex);
				}
			}
		},
		[refsArray],
	);

	useEffect(() => {
		const updateActiveSection = () => {
			const viewportCenter = window.innerHeight / 2;
			let closestIndex = 0;
			let closestDistance = Infinity;

			refsArray.forEach((ref, index) => {
				if (!ref.current) return;
				const rect = ref.current.getBoundingClientRect();
				const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			setNavigatorIndex(closestIndex);
		};

		updateActiveSection();
		window.addEventListener('scroll', updateActiveSection, { passive: true });
		window.addEventListener('resize', updateActiveSection);

		return () => {
			window.removeEventListener('scroll', updateActiveSection);
			window.removeEventListener('resize', updateActiveSection);
		};
	}, [refsArray]);

	return {
		navigatorIndex,
		jumpTo,
	};
};
